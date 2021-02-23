### INSTALARE

- clonati acest repo
- `npm install`
- `npm start`

### UTLIZARE
- deschideti un browser si accesati *localhost:3333/[days:INT]/[from:DATETIME?]*
> **data start **poate avea orice format aceptabil de data javascript (recomand "YYYY-MM-DD")
    data_start este un parametru optional. daca va fi omis, se va folosi data curenta pentru calculul numarului de zile lucratoare.


sau
- efectuați un request de tip GET cu urmatorii parametri:
`curl  http://localhost:3333/10/2021-01-01` 
sau 
`curl -X GET -G "http://localhost:3333/30"` (va calcula de la data curentă, 30 de zile lucrătoare)

#### OBIECTUL RĂSPUNS
`{
	start:<DateTime>,
	days: <Integer>, end: <DateTime>
}`


------------


***NOTĂ***

------------
sarbatorile legale au fost configurate pentru anul 2021
dacă aveți nevoie de date pentru alți ani, editați fișierul ***legalDays.js***

