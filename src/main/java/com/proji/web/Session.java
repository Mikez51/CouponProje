package com.proji.web;

import com.proji.services.ClientFacade;
public class Session {
	private ClientFacade facade;
	private long lastAccessed;

	public Session(ClientFacade facade, long lastAccessed) {
		super();
		this.facade = facade;
		this.lastAccessed = lastAccessed;
	}

	public ClientFacade getFacade() {
		return facade;
	}

	public long getLastAccessed() {
		return lastAccessed;
	}

}
