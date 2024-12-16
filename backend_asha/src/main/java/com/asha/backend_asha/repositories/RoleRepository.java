package com.asha.backend_asha.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asha.backend_asha.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(String name);
}
