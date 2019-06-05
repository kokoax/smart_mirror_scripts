REPO_DIR := $(realpath $(dir $(lastword $(MAKEFILE_LIST))))
SYSTEMD_DIR := ~/.config/systemd/user
SYSTEMD_FILES := ./systemd
CONFIG_RU := $(REPO_DIR)/config.ru
PORT_OPTION := --port
PORT := 4567
RUBY := $(which ruby)

run: deploy
	@rackup $(CONFIG_RU) $(PORT_OPTION) $(PORT)

deploy: make_dir
	@cp $(SYSTEMD_FILES)/* $(SYSTEMD_DIR)

make_dir:
	@mkdir -p $(SYSTEMD_DIR)
