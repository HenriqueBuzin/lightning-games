package lightning.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lightning.model.GameHasPlatform;
import lightning.rest.GameHasPlatformDTO;

@RequestScoped
public class GameHasPlatformService extends GenericService<GameHasPlatform> {

	@Inject
	private EntityManager em;

	public List<GameHasPlatformDTO> findAll() {
		TypedQuery<GameHasPlatform> query = em.createQuery(
			"SELECT g FROM GameHasPlatform g "
		  + "left join fetch g.game "
		  + "left join fetch g.platform ", GameHasPlatform.class);

		List<GameHasPlatform> result = query.getResultList();
		
		return result.stream()
					 .map(g -> new GameHasPlatformDTO(g.getGame(), g.getPlatform()))
					 .collect(Collectors.toList());
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<GameHasPlatform> getClazz() {
		return GameHasPlatform.class;
	}

}
