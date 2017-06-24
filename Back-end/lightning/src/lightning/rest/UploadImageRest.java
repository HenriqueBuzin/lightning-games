package lightning.rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

@Path("/image")
public class UploadImageRest {

	@POST
	@Consumes("multipart/form-data")
	public Response uploadFile(@Context ServletContext context, MultipartFormDataInput input) {
		final String contextPath = context.getRealPath(File.separator);
		String imagePath = contextPath + "\\images";
		String output = "";
		
		Map<String, List<InputPart>> formParts = input.getFormDataMap();
		List<InputPart> inPart = formParts.get("file");

		for (InputPart inputPart : inPart) {
			try {
				MultivaluedMap<String, String> headers = inputPart.getHeaders();
				String fileName = parseFileName(headers);

				InputStream istream = inputPart.getBody(InputStream.class, null);

				File diretorio = new File(imagePath);
				if (diretorio.exists() && diretorio.isDirectory()) {
					fileName = imagePath + "\\" + fileName;

					saveFile(istream, fileName);

					output = "Arquivo salvo no servidor : " + fileName;
				}
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
