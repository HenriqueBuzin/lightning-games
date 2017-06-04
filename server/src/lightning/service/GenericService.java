package lightning.service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

public abstract class GenericService<T> {

	protected abstract EntityManager getEntityManager();

	protected abstract Class<T> getClazz();

	@Transactional
	public void create(T entity) {
		getEntityManager().persist(entity);
	}

	@Transactional
	public void edit(T entity) {
		getEntityManager().merge(entity);
	}

	@Transactional
	public void remove(T entity) {
		getEntityManager().remove(getEntityManager().merge(entity));
	}

	public T find(Object id) {
		return getEntityManager().find(getClazz(), id);
	}

}
