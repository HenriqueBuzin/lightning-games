package lightning.rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import lightning.model.Game;
import lightning.model.Manufacture;
import lightning.model.Platform;
import lightning.model.User;
import lightning.service.GameService;
import lightning.service.ManufactureService;
import lightning.service.PlatformService;
import lightning.service.UserService;

@Path("/image")
public class UploadImageRest {

	@Inject
	private GameService gameService;
	@Inject
	private ManufactureService manufactureService;
	@Inject
	private PlatformService platformService;
	@Inject
	private UserService userService;
	
	@POST
	@Path("/user")
	@Consumes("multipart/form-data")
	public Response uploadUserImage(@Context ServletContext context, MultipartFormDataInput input) {
		Response response = null;
		
		try {
			Integer userId = input.getFormDataPart("id", Integer.class, null);
			String extension = getExtension(input);
			String folder = "user" + File.separator + "user_" + userId + extension;
			
			response = uploadFile(folder, context, input);
			
			User user = userService.find(userId);
			
			folder = folder.replaceAll("\\\\", "/");
			
			user.setImage(folder);
			userService.edit(user);
			
		} catch (IOException e) { }
		
		return response;
	}
	
	@POST
	@Path("/platform")
	@Consumes("multipart/form-data")
	public Response uploadPlatformImage(@Context ServletContext context, MultipartFormDataInput input) {
		Response response = null;
		
		try {
			Integer platformId = input.getFormDataPart("id", Integer.class, null);
			String extension = getExtension(input);
			String folder = "platform" + File.separator + "platform_" + platformId + extension;
			
			response = uploadFile(folder, context, input);
			
			Platform platform = platformService.find(platformId);
			
			folder = folder.replaceAll("\\\\", "/");
			
			platform.setImage(folder);
			platformService.edit(platform);
			
		} catch (IOException e) { }
		
		return response;
	}
	
	@POST
	@Path("/manufacture")
	@Consumes("multipart/form-data")
	public Response uploadManufactureImage(@Context ServletContext context, MultipartFormDataInput input) {
		Response response = null;
		
		try {
			Integer manufactureId = input.getFormDataPart("id", Integer.class, null);
			String extension = getExtension(input);
			String folder = "manufacture" + File.separator + "manufacture_" + manufactureId + extension;
			
			response = uploadFile(folder, context, input);
			
			Manufacture manufacture = manufactureService.find(manufactureId);
			
			folder = folder.replaceAll("\\\\", "/");
			
			manufacture.setImage(folder);
			manufactureService.edit(manufacture);
			
		} catch (IOException e) { }
		
		return response;
	}
	
	@POST
	@Path("/game")
	@Consumes("multipart/form-data")
	public Response uploadGameImage(@Context ServletContext context, MultipartFormDataInput input) {
		Response response = null;
		
		try {
			Integer gameId = input.getFormDataPart("id", Integer.class, null);
			String extension = getExtension(input);
			String folder = "game" + File.separator + "game_" + gameId + extension;
			
			response = uploadFile(folder, context, input);
			
			Game game = gameService.find(gameId);
			
			folder = folder.replaceAll("\\\\", "/");
			
			game.setImage(folder);
			gameService.edit(game);
			
		} catch (IOException e) { }

		return response;
	}
	
	private String getExtension(MultipartFormDataInput input) {
		Map<String, List<InputPart>> formParts = input.getFormDataMap();
		InputPart file = formParts.get("file").get(0);
		
		MultivaluedMap<String, String> headers = file.getHeaders();
		String fileName = parseFileName(headers);
		return fileName.substring(fileName.lastIndexOf("."));
	}
	
	public Response uploadFile(String folder, ServletContext context, MultipartFormDataInput input) {
		final String contextPath = context.getRealPath(File.separator);
		String imagePath = contextPath + File.separator + "images" + File.separator + folder;
		String output = "";
		
		Map<String, List<InputPart>> formParts = input.getFormDataMap();
		List<InputPart> inPart = formParts.get("file");

		for (InputPart inputPart : inPart) {
			try {
				InputStream istream = inputPart.getBody(InputStream.class, null);

				saveFile(istream, imagePath);

				output = "Arquivo salvo no servidor : " + imagePath;
				
			} catch (IOException e) {
				return Response.status(500).entity(e.getMessage()).build();
			}
		}

		return Response.status(200).entity(output).build();
	}
	
	private String parseFileName(MultivaluedMap<String, String> headers) {
		String[] contentDispositionHeader = headers.getFirst("Content-Disposition").split(";");

		for (String name : contentDispositionHeader) {
			if ((name.trim().startsWith("filename"))) {
				String[] tmp = name.split("=");
				String fileName = tmp[1].trim().replaceAll("\"","");
				return fileName;
			}
		}
		return "randomName";
	}
	
	private void saveFile(InputStream uploadedInputStream, String serverLocation) throws IOException {
		OutputStream outpuStream = new FileOutputStream(new File(serverLocation));
		int read = 0;
		byte[] bytes = new byte[1024];

		outpuStream = new FileOutputStream(new File(serverLocation));
		while ((read = uploadedInputStream.read(bytes)) != -1) {
			outpuStream.write(bytes, 0, read);
		}
		outpuStream.flush();
		outpuStream.close();
	}

}
