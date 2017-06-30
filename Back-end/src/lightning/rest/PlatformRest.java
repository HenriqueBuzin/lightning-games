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

import lightning.model.Platform;
import lightning.service.PlatformService;

@Path("/platform")
public class PlatformRest {

	@Inject
	private PlatformService service;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Platform create(Platform entity) {
		if (entity.getImage() == null || "".equals(entity.getImage())) {
			entity.setImage("no-image.png");
		}
		service.create(entity);
		
		return entity;
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void edit(Platform entity) {
		if (entity.getImage() == null || "".equals(entity.getImage())) {
			entity.setImage("no-image.png");
		}
		service.edit(entity);
	}

	@DELETE
	@Path("{id}")
	public void remove(@PathParam("id") Integer id) {
		service.remove(id);
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Platform find(@PathParam("id") Integer id) {
		return service.find(id);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Platform> findAll() {
		return service.findAll();
	}

}
