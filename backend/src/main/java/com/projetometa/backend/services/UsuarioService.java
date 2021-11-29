package com.projetometa.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetometa.backend.dto.UsuarioDto;
import com.projetometa.backend.entities.UsuarioEntity;
import com.projetometa.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
    private UsuarioRepository repo;
    
	public UsuarioDto acessarDadosUsuario(UsuarioDto userDto){
		UsuarioEntity userEntity = repo.findByEmailAndSenha(userDto.getEmail(), userDto.getSenha());
		 return new UsuarioDto(userEntity);
	}
	
	public void insereDados() {
		UsuarioEntity user = new UsuarioEntity(null, "Raul Nogueira", "raul@gmail.com", "123");
		UsuarioEntity user1 = new UsuarioEntity(null, "Carlos Nogueira", "carlos@gmail.com", "234");
		repo.save(user);
		repo.save(user1);	
	}
}
