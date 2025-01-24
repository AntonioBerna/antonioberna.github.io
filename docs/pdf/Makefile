COMPILER=lualatex
OUTPUT_PDF=Antonio_Bernardini_Resume
INPUT_FILE=resume.tex

all:
	$(COMPILER) -jobname=$(OUTPUT_PDF) $(INPUT_FILE)
	$(COMPILER) -jobname=$(OUTPUT_PDF) $(INPUT_FILE)

clean:
	$(RM) *.aux *.log *.out *.fls *.fdb_latexmk

clean_pdf:
	$(RM) $(OUTPUT_PDF).pdf

.PHONY: all clean clean_pdf
