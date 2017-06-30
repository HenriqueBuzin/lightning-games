package lightning.rest;

import java.util.ArrayList;

import lightning.model.Game;
import lightning.model.Platform;

public class GameHasPlatformDTO {

	private Game game;
	private Platform platform;

	public GameHasPlatformDTO(Game game, Platform platform) {
		super();
		this.game = new Game(game.getId(), game.getName(), game.getCategory(), game.getPrice(), game.getQuantity(), game.isProduction());
		this.game.setGameHasPlatformList(new ArrayList<>());
		
		this.platform = new Platform(platform.getId(), platform.getName());
		this.platform.setGameHasPlatformList(new ArrayList<>());
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

}
