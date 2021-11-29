package com.projetometa.backend.dto;

import com.projetometa.backend.entities.UsuarioEntity;

public class UsuarioDto {	
	private String email;
	private String senha;
	
	public UsuarioDto() {
		
	}
	public UsuarioDto(UsuarioEntity userEntity) {
		this.email = userEntity.getEmail();
		this.senha = userEntity.getSenha();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
