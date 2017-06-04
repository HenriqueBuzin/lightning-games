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

import lightning.model.GameHasPlatform;
import lightning.service.GameHasPlatformService;

@Path("/gamehasplatform")
public class GameHasPlatformRest {

	@Inject
	private GameHasPlatformService service;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(GameHasPlatform entity) {
		service.create(entity);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void edit(GameHasPlatform entity) {
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
	public GameHasPlatform find(@PathParam("id") Integer id) {
		return service.find(id);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<GameHasPlatform> findAll() {
		return service.findAll();
	}

}
