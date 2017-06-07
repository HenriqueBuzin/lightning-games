package lightning.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import lightning.model.Manufacture;
import lightning.service.ManufactureService;

@Path("/manufacture")
public class ManufactureRest {

	@Inject
	private ManufactureService service;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(Manufacture entity) {
		service.create(entity);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void edit(Manufacture entity) {
		service.edit(entity);
	}

	@DELETE
	@Path("{id}")
	public void remove(@PathParam("id") Integer id) {
		service.remove(service.find(id));
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Manufacture find(@PathParam("id") Integer id) {
		return service.find(id);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Manufacture> findAll() {
		return service.findAll();
	}

}
