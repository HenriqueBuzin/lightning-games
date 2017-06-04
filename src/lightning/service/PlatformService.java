package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lightning.model.Platform;

@RequestScoped
public class PlatformService extends GenericService<Platform> {

	@Inject
	private EntityManager em;

	public List<Platform> findAll() {
		TypedQuery<Platform> query = em.createNamedQuery("Platform.findAll", Platform.class);
		
		return query.getResultList();
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<Platform> getClazz() {
		return Platform.class;
	}
	
}
