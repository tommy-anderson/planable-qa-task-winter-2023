In this document the following topics like observations, recommendations and notes are touched for the given QA Task.


OBSERVATIONS and RECOMMENDATIONS:
	- The "The first letter should be capitalized" it's not complete or not well defined for the name field. When testing the feature, it allows typing all type of characters(alphanumeric characters, special characters etc.). 
	  If the system allows the insertion of letters only, this requirement won't deliver any value because the system automatically saves the inserted value with the first letter in upper case;
	  if the system allows the insertion of all characters, in this case it will be a bug, because when we insert a value like "123abc" it will allow us to save it, which would mean that the requirement won't be applied.
	  (see OBS_001.mp4 and OBS_002.mp4)
	  So, before opening an issue, first we need to get clear with the requirement in order to avoid misunderstanding.
	
	- For several web components I would open an improvement task to ask to allocate suggestive names for selectors in order to easily pick them when needed.
	
	
	
	
	
NOTES:
	- The bugs were documented in bugReport.pdf;
	- The skipped tests are tests with the found bugs and where it was possible to create automatic tests; once the bugs are fixed these tests can be added to regression as well.