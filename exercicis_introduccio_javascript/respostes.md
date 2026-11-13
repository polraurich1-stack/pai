# Respostes - Exercicis Introducció JavaScript

## 1. Variables

**1.1** Correctes: 1, 2, 4, 5, 7, 9, 10, 11.
Incorrectes: 3 (`vari-able`), 6 (`vari.able`), 8 (`4variable`).

**1.2** `nomEmpleat` (camelCase, la convenció habitual en JavaScript). També serveix `NomEmpleat`, però en JS es fa servir més camelCase.

## 2. Declaració

**2.1**
- a) Imprimeix `2`. Amb `var` es pot redeclarar.
- b) Error de sintaxi (`SyntaxError: Identifier 'a' has already been declared`). No s'executa res.
- c) Error de sintaxi, igual que b.
- d) Error de sintaxi, igual que b.

## 3. Assignació

**3.1** Correctes: `let a = 5;`, `let c = "c";`, `let c = "c'c'c";`, `let n = 35;`.
Incorrectes: `let b = 5z;`, `let c = "c';`, `let c = "c'c"c';`, `let n = 35va;`.

**3.2** La línia errònia és `let b = c;`, perquè `c` encara no està declarada (`ReferenceError: c is not defined`). A més, `c = 7;` també fallaria, perquè `c` no s'ha declarat mai.

**3.3** `55` és number, `55.5` és number, `"Hola"` és string, `'Hola'` és string, `true` és boolean.

## 4. Operadors aritmètics

**4.1** `25 40 80`

**4.2** `42 4 30`

**4.3** Valors finals: `a = 16`, `b = 35`, `c = 62`, `d = 70`. Sí, en executar-lo dona el mateix resultat que fer-ho a mà.

**4.4** `13`, `11`, `29`, `42`, `4`, `30` (un per línia). Quan es fa `a = a + 3`, el valor de `a` passa de 10 a 13 abans del següent `console.log`.

**4.5** Primera línia: `15 8 27 45`. Segona línia: `16 35 62 70`.

**4.6** `2 50 1`

**4.7** `150 3.3333333333333335`

## 5. Operadors unaris

**5.1** `6` i després `7 6`

**5.2** `6` i després `7 7`

**5.3** `5 5 6`, `5 6 5`, `30 31`.
- `a++` primer dona el valor i després suma 1; `++a` primer suma 1 i després dona el valor.
- Per això `let d = 25 + a++` fa 25+5=30, mentre que `let e = 25 + ++a` fa 25+6=31.

## 6. Assignacions compostes

**6.1** `15`, `75`, `70`, `14` (un per línia).

## 7. Cadenes

**7.1** Incorrecta: `let c = 'Hola";` (les cometes d'obertura i tancament no coincideixen). La resta són correctes.

**7.2** `HolaAdéu` i després `Hola2` (el número 2 es converteix en text).

## 8. Comparacions

**8.1** `false true false`

**8.2** `false true false`

**8.3** `false true`

**8.4** `false true false`. `"Hola" < "hola"` és true perquè la `H` (72) és menor que la `h` (104) en codi Unicode. `"Hola" < "Adéu"` és false perquè la `H` (72) és més gran que la `A` (65).

**8.5** `true`. Primer s'avalua `a < b` (9 < 7), que dona `false`. Després `false < c` es converteix en `0 < 3`, que és `true`. Per això les dues línies següents també donen `true`, perquè `true == 1` i `false == 0` són certs amb l'operador `==`.

## 9. Operadors lògics

**9.1** `true`, `false`, `false`, `false`, `false`. Amb `&&` només és `true` si tots dos són `true`. Si el primer és `false`, el segon no s'avalua.

**9.2** `false`, `true`, `false`, `true`, `true`. Amb `||` és `true` si almenys un és `true`.

## 10. Prioritat

**10.1** `25`, després `4.5 6`. La multiplicació es fa abans de la suma, i `%` té la mateixa prioritat que `*` i `/`.

**10.2** `17 22 -3.5`

**10.3** `true false`. `&&` té més prioritat que `||`.

**10.4** `true false true true`

## 11. Operador interrogant

**11.1** El programa demana un número. Si és més gran o igual que 18, mostra "Ets major d'edat"; si no, mostra "No ets major d'edat". `prompt` retorna text, però la comparació `a>=18` el converteix a número.

**11.2** Veure `11-2.js`.

**11.3** Veure `11-3.js`.
