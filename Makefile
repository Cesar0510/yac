COLOR    = \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR  = \033[0;33m
NO_COLOR    = \033[m

dev:
	@printf "%b" "$(COLOR) -- DEVELOPMENT --  $(NO_COLOR)\n"

clean:
	@printf "%b" "$(COLOR) -- CLEANING --  $(NO_COLOR)\n"
	@find . -name '*.py[cod]' -exec rm --force {} +
	@find . -name '__pycache__' -exec rm -rf --force {} +

.PHONY: clean dev
