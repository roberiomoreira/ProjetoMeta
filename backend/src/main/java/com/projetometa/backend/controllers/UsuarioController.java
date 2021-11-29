package com.projetometa.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.projetometa.backend.dto.UsuarioDto;
import com.projetometa.backend.services.UsuarioService;

@RestController
@RequestMapping(value="/login")
public class UsuarioController {
	
	@Autowired
    private UsuarioService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<UsuarioDto> acessarDadosUsuario(@RequestBody UsuarioDto usuario){
		service.insereDados();
		UsuarioDto userDto = service.acessarDadosUsuario(usuario);
		 return ResponseEntity.ok(userDto);
	}
}
