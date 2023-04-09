# TW-CoCo
<!DOCTYPE  html>

<html  lang="en">

  

<head>

<meta  charset="utf-8"  />

<meta  charset="UTF-8">

<meta  http-equiv="X-UA-Compatible"  content="IE=edge">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

</head>

  

<body>

<article>

<header>

<h1>GaMon Report</h1>

<section  typeof="sa:AuthorsList">

<h2>Authors</h2>

<ul>

<li  typeof="sa:ContributorRole"  property="schema:author">

<span  typeof="schema:Person">

<meta  property="schema:givenName"  content="George"  />

<meta  property="schema:familyName"  content="Tanase"  />

<span  property="schema:name">George Tanase</span>

</span>

<ul>

<li  property="schema:roleContactPoint"  typeof="schema:ContactPoint">

<a href="mailto:georgetanase74@gmail.com" property="schema:email">georgetanase74@gmail.com</a>

</ul>

</li>

<li typeof="sa:ContributorRole" property="schema:author">

<span typeof="schema:Person">

<meta property="schema:givenName" content="Tudor"  />

<meta property="schema:additionalName" content="George"  />

<meta property="schema:familyName" content="Istov"  />

<span property="schema:name">Tudor-George Istov</span>

</span>

<ul>

<li property="schema:roleContactPoint" typeof="schema:ContactPoint">

<a href="mailto:tudoristov@yahoo.com" property="schema:email">tudoristov@yahoo.com</a>

</li>

</ul>

</li>

</ul>

<li typeof="sa:ContributorRole" property="schema:author">

<span typeof="schema:Person">

<meta property="schema:givenName" content="Sebastian"  />

<meta property="schema:additionalName" content="Stanciu"  />

<span property="schema:name">Sebastian Stanciu</span>

</span>

</section>

<section  typeof="sa:Important informations">

<h2>Content</h2>

</section>

<div  role="contentinfo">

<ol  role="directory">

<li><a  href="#introduction">Introduction</a>

<ol  role="introduction-directory">

<li><a  href="#introduction__purpose">Purpose</a></li>

<li><a  href="#introduction__audience">Intended Audience and Reading Suggestions</a></li>

<li><a  href="#introduction__product-scope">Product Scope</a></li>

<li><a  href="#introduction__references">References</a></li>

</ol>

</li>

<li><a  href="#overall-description">Overall Description</a>

<ol  role="#description-directory">

<li><a  href="#overall-description__product-perspective">Product Perspective</a></li>

<li><a  href="#overall-description__product-functions">Product Functions</a></li>

<li><a  href="#overall-description__user-documentation">User Documentation</a></li>

</ol>

</li>

<li><a  href="#interfacereq">External Interface Requirements</a>

<ol  role="#interfacereq-directory">

<li><a  href="#interfacereq__user-interfaces">User Interfaces</a></li>

</ol>

</li>

</li>

<li><a  href="#systemfeatures">System Features</a>

<ol  role="#systemfeatures-directory">

<li><a  href="#systemfeatures__hartainteractiva">Data Visualisation</a></li>

<li><a  href="#systemfeatures__generarearapoartelor">Data Manipulation</a></li>

</ol>

</li>

</li>

<li><a  href="#nonfunctionalreq">Other Nonfunctional Requirements</a>

<ol  role="#nonfunctionalreq-directory">

<li><a  href="#nonfunctionalreq__security-requirements">Data Saving</a></li>

</ol>

</li>

</ol>

</div>

</header>

<section  id="introduction"  role="doc-introduction">

<h2>1. Introducere</h2>

<section  id="introduction__purpose"  role="doc-introduction">

<h3>1.1 Scopul</h3>

<p>Scopul acestui proiect web este de a dezvolta un instrument flexibil de vizualizare a datelor privitoare la Consumer Confidence, care să permită utilizatorilor să exploreze și să analizeze datele în moduri diferite, prin intermediul unui API REST/GraphQL propriu. Prin intermediul acestui instrument, utilizatorii vor putea să compare Consumer Confidence în diferite state, să urmărească evoluția acestuia în timp și să exploreze relațiile dintre Consumer Confidence și alți indicatori economici. </p>

</section>


<section  id="introduction__product-scope"  role="doc-introduction">

<h3>1.2 Scopul produsului</h3>

<p>
Scopul final al proiectului este de a oferi o modalitate ușoară și intuitivă pentru utilizatorii de a vizualiza și analiza datele, ajutându-i să ia decizii informate bazate pe date.
</p>

</section>

<section  id="introduction__references"  role="doc-introduction">

</section>

</section>

<section  id="overall-description"  role="doc-overall-description">

<h2>2. Descriere generala</h2>

<section  id="overall-description__product-perspective"  role="doc-overall-description">

<h3>2.1 Perspectiva produsului</h3>

<p>Acest instrument web va permite utilizatorilor să analizeze datele și să compare Consumer Confidence între diferite țări și indicatori suplimentari, pentru a descoperi tendințe și modele. De asemenea, utilizatorii vor putea exporta datele sub formă de fișiere CSV, WebP și SVG pentru a le utiliza ulterior în rapoarte sau alte aplicații.</p>

</section>

<section  id="overall-description__product-functions"  role="doc-overall-description">

<h3>2.2 Functionalitati</h3>

<p><b>Utilizatorii</b> vor beneficia de urmatoarele functionalitati: </p>
<p>Accesarea datelor privitoare la Consumer Confidence prin intermediul unui API REST/GraphQL propriu</p>	
	<p>Vizualizarea datelor sub forma unor diagrame interactive</p>
	<p>Exportarea datelor in formatele CSV, WebP si SVG </p>
	<p>Asigurarea securitatii datelor prin metode de autentificare si autorizare a utilizatorilor</p>
</section>

<section  id="overall-description__operation-enviroment"  role="doc-overall-description">

<h3>2.3 Mediul de operare</h3>

<p>Proiectul poate fi implementat si rulat pe orice sistem de operare care suporta un server web si un browser </p>

</section>

<section  id="overall-description__design-constraints"  role="doc-overall-description">

<h3>2.4 Design si implementare</h3>

<p>

<ul>

<p> Front-End: </p>

<ul>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

</ul>

<ul>

Back-End:

<ul>

<li>Node.js</li>

<li>MySQL</li>

<li>GraphQL</li>

</ul>

</ul>

</p>

</section>

<section  id="interfacereq"  role="interfacereq-description">

<h2>3. Interfata aplicatiei</h2>

<section  id="interfacereq__user-interfaces"  role="interfacereq-description">

<h3>3.1 User Interface</h3>

<li>Home Page</li>
<li>Login/Register Page</li>
<li>Data Visualisation Page</li>
<li>Data Manipulation Page</li>
<li>Data Saving Page</li>
<h3>3.2 Hardware Interfaces</h3>
Produsul functioneaza pe orice device cu conexiune la internet si browser. 

<h3>3.4 Communications Interfaces</h3>
Comunicarea se face prin Http.
</section>

</section>

<section  id="systemfeatures"  role="systemfeatures-description">

<h2>4. System Features</h2>

<p> <b>Data Visualisation Page</b></p>
<p>Utilizatorul va putea sa: </p>
<li>Vada date privitoare la Consumer Confidence, care să permită explorarea și analiza datelor în moduri diferite</li>
<p> <b>Register Page</b></p>
<p>Utilizatorii isi vor putea crea conturi.</p>
<p> <b>Login Page</b></p>
<p>Utilizatorii vor putea accesa contul introducand userul si parola.</p>
<p> <b>Data Saving Page</b></p>
<p> Utilizatorul va putea salva si descarca datele in format CSV, WebP si SVG. </p>
<p> <b>Home Page</b></p>
<p>Utilizatorul va vedea informatii despre site.</p>
</section>

</section>

</article>

</body>

</html>
