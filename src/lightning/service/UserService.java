package lightning.service;

import java.security.MessageDigest;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lightning.model.User;

@RequestScoped
public class UserService extends GenericService<User> {

	@Inject
	private EntityManager em;

	public List<User> findAll() {
		TypedQuery<User> query = em.createNamedQuery("User.findAll", User.class);
		
		return query.getResultList();
	}
	
	public User findByNameAndPassword(User user) {
		TypedQuery<User> q = em.createNamedQuery("User.findByNameAndPassword", User.class);
		q.setParameter("name", user.getName());
		q.setParameter("password", user.getPassword());

		User retorno = null;

		try {
			retorno = q.getSingleResult();
		} catch (Exception e) { }

		return retorno;
	}
	
	public String converterStringParaMD5(String valor) {
		String resultado = "";
		
		try {
			// Instanciamos o nosso HASH MD5
			MessageDigest digest = MessageDigest.getInstance("MD5");

			// Converter String para um array de bytes em MD5
			byte[] valorMD5 = digest.digest(valor.getBytes("UTF-8"));

			// Convertemos os bytes para hexadecimal
			StringBuilder sb = new StringBuilder();
			for (byte b : valorMD5) {
				sb.append(Integer.toHexString((b & 0xFF) | 0x100).substring(1, 3));
			}

			resultado = sb.toString();

		} catch (Exception e) {
			e.printStackTrace();
			
		}
		
		return resultado;
	}

	@Override
	public EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<User> getClazz() {
		return User.class;
	}

}
