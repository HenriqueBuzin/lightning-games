package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lightning.model.Manufacture;

@RequestScoped
public class ManufactureService extends GenericService<Manufacture> {

	@Inject
	private EntityManager em;

	public List<Manufacture> findAll() {
		TypedQuery<Manufacture> query = em.createNamedQuery("Manufacture.findAll", Manufacture.class);

		return query.getResultList();
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<Manufacture> getClazz() {
		return Manufacture.class;
	}

}
