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

import lightning.model.Game;
import lightning.service.GameService;

@Path("/game")
public class GameRest {

	@Inject
	private GameService service;
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Game entity) {
    	if (entity.getImage() == null || "".equals(entity.getImage())) {
			entity.setImage("no-image.png");
		}
        service.create(entity);
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void edit(Game entity) {
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
    public Game find(@PathParam("id") Integer id) {
    	Game game = service.find(id);
    	
    	if(game.getManufacture() != null)
    		game.setManufactureId(game.getManufacture().getId());
    	
    	if(game.getGameHasPlatformList().size() > 0)
    		game.setPlatform(String.valueOf(game.getGameHasPlatformList().get(0).getPlatform().getId()));
        return game;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Game> findAll() {
        return service.findAll();
    }

}
