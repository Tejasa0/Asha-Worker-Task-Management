package com.asha.backend_asha.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asha.backend_asha.models.AshaUser;

public interface AshaUserRepository extends JpaRepository<AshaUser, Long> {
	Optional<AshaUser> findByUsername(String username);
}
