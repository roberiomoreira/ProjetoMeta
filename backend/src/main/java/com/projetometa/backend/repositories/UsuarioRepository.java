package com.projetometa.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetometa.backend.dto.UsuarioDto;
import com.projetometa.backend.entities.UsuarioEntity;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Integer>{
	UsuarioEntity findByEmailAndSenha(String email, String senha);
}
