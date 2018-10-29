Webanwendung "E-Protokolle Schulsanitätsdienst"
===============================

Kurzbeschreibung
-----------------------

Diese Webanwendung schafft die Möglichkeit, Protokolle des Schulsanitätsdienstes
der Malteser, die bisher analog auf ausgedruckten Formularen eingetragenen
Informationen, digital abzubilden. Durch den direkten Mail-Versand gelangen
die eingetragenen Informationen richtigen Ansprechpartnern.

Die Single Page App läuft ohnen einen Server im Hintergrund komplett im Browser.
Lediglich der Mail-Versand bedingt einen Server Zugriff.

Verwendete Technologien
-----------------------
Folgende Entwicklungswerkzeuge kommen zum Einsatz:

 * [Atom:](https://atom.io/) Spezieller Texteditor für Webentwickler und Programmierer
 * [git:](https://git-scm.com/") Versionsverwaltung zur gemeinsamen Arbeit am Quellcode
 * https://smtpjs.com/v2/smtp.js Schnittstelle für den Mail-Versand

Es findet keine Speicherung von den Protokollen statt, da diese per E-Mail versandt werden. Somit wird keine Datenbank genutzt.
Es wird die o.g. Schnittstelle genutzt, um den E-Mail Versand zu realisieren. Nach der Erstellung des Protokolls, wird dieses in der Form einer PDF-Datei per E-Mail versendet.


Benutzergruppen dieser Anwendung
--------------------------

Die Webanwendung ist für die Anwendung durch Schulsanitäter und Führungskräfte
des Malteser Schulsanitätsdienstes konzipiert. Die Schulsanitäter nutzen
die Webanwendung nicht täglich, sondern nur im Bedarfsfall.
Deshalb ist eine leichte Bedienbarkeit und eine intuitive
Benutzeroberfläche gegeben.

Copyright
---------

Dieses Projekt ist lizenziert unter
[_Creative Commons Namensnennung 4.0 International_](http://creativecommons.org/licenses/by/4.0/)

© 2018 Justin Hollmann, Johanna Illner, Jonas Beuth <br/>
