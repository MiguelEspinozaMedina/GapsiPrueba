package com.mx.gapsi.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.gapsi.models.entity.Proveedor;
import com.mx.gapsi.models.service.IProveedorService;

@RestController
public class ProveedorController {
	
	@Autowired
	private IProveedorService proveedorS;
	
	@GetMapping("/proveedores")
	public List<Proveedor> listaP(){
		return proveedorS.findAll();
//		.stream().map(proveedor ->{
//			proveedor.
//			proveedor.setPort(Integer.parseInt(env.getProperty("local.server.port")));
//		return proveedor;
//		}).collect(Collectors.toList());
	}
}
