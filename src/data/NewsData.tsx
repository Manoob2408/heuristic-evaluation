// newsData.ts
const newsItem5Content = `
  <p>L'Escola Politècnica Superior (EPS) ha signat un nou conveni de col·laboració amb més de 20 empreses líders del sector tecnològic per ampliar significativament les oportunitats de pràctiques curriculars i extracurriculars per als seus estudiants.</p>
  
  <h3>Empreses participants</h3>
  <p>Entre les empreses que han signat el conveni es troben:</p>
  <ul>
    <li>Multinacionals del sector IT com IBM, Microsoft i Google</li>
    <li>Startups tecnològiques locals en expansió</li>
    <li>Empreses de desenvolupament de software</li>
    <li>Companyies especialitzades en ciberseguretat</li>
    <li>Firmes de consultoria tecnològica</li>
  </ul>
  
  <h3>Modalitats de pràctiques</h3>
  <p>El conveni contempla diferents modalitats de col·laboració:</p>
  <ul>
    <li>Pràctiques curriculars de 300 hores per a estudiants de grau</li>
    <li>Pràctiques extracurriculars remunerades</li>
    <li>Projectes de final de grau en col·laboració amb empreses</li>
    <li>Beques de recerca aplicada</li>
  </ul>
  
  <h3>Beneficis per als estudiants</h3>
  <p>Aquest acord permetrà als estudiants accedir a experiències pràctiques reals, desenvolupar competències professionals i establir contactes amb el món empresarial. Les empreses oferiran tutorització especialitzada i la possibilitat de contractació posterior.</p>
  
  <h3>Procés de selecció</h3>
  <p>Les sol·licituds de pràctiques es gestionaran a través del portal de l'estudiant a partir del proper mes de juny. El procés inclourà entrevistes amb les empreses i assignació segons el perfil acadèmic i les preferències dels estudiants.</p>
`;

// Content for news item 6
const newsItem6Content = `
  <p>L'EPS té l'honor de rebre el Dr. Carlos Martínez, reconegut expert internacional en enginyeria sostenible i professor emèrit de la Universitat Politècnica de Madrid, qui oferirà una conferència magistral sobre els reptes mediambientals en l'enginyeria del segle XXI.</p>
  
  <h3>Tema de la conferència</h3>
  <p>La conferència, titulada "Enginyeria per a un Futur Sostenible: Innovació i Responsabilitat Mediambiental", abordarà els següents aspectes:</p>
  <ul>
    <li>L'impacte ambiental de les tecnologies emergents</li>
    <li>Disseny d'infrastructures resilients al canvi climàtic</li>
    <li>Economia circular en els processos industrials</li>
    <li>Energies renovables i eficiència energètica</li>
    <li>Materials sostenibles i bioenginyeria</li>
  </ul>
  
  <h3>Perfil del ponent</h3>
  <p>El Dr. Martínez és autor de més de 150 publicacions científiques i ha dirigit projectes de recerca finançats per la Unió Europea en àrees de sostenibilitat. Ha estat consultor per a organismes internacionals com la UNESCO i l'ONU en temes de desenvolupament sostenible.</p>
  
  <h3>Detalls de l'esdeveniment</h3>
  <p>La conferència tindrà lloc el dimarts 28 de maig a les 18:00h a l'Aula Magna de l'EPS. L'entrada és gratuïta però cal inscripció prèvia. Després de la conferència hi haurà una sessió de preguntes i respostes i un còctel de networking.</p>
  
  <h3>Acreditació professional</h3>
  <p>L'assistència a la conferència comptarà com a crèdits de formació continuada per als enginyers col·legiats i com a activitat complementària reconeguda per als estudiants de l'EPS.</p>
`;

export const newsItems = [
    {
        id: 1,
        date: 'divendres, 24 de maig de 2025',
        dateObj: new Date(2025, 4, 24),
        title: 'Nova convocatòria de beques d\'excel·lència acadèmica per al curs 2025-2026',
        excerpt: 'L\'Escola Politècnica Superior obre una nova convocatòria de beques destinades als estudiants amb millor expedient acadèmic.',
        category: 'Beques',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        date: 'dijous, 23 de maig de 2025',
        dateObj: new Date(2025, 4, 23),
        title: 'Inauguració del nou laboratori d\'Intel·ligència Artificial i Robòtica',
        excerpt: 'Demà dimecres s\'inaugurarà el nou laboratori equipat amb la tecnologia més avançada per a la recerca en IA.',
        category: 'Infraestructures',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        date: 'dimecres, 22 de maig de 2025',
        dateObj: new Date(2025, 4, 22),
        title: 'Jornada de Portes Obertes: Descobreix els nostres graus d\'enginyeria',
        excerpt: 'El proper 25 de maig celebrem la Jornada de Portes Obertes per mostrar les nostres titulacions als futurs estudiants.',
        category: 'Esdeveniments',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 4,
        date: 'dimarts, 21 de maig de 2025',
        dateObj: new Date(2025, 4, 21),
        title: 'Estudiants de l\'EPS guanyen el primer premi en el concurs d\'innovació tecnològica',
        excerpt: 'Un equip format per estudiants de Grau en Enginyeria Informàtica ha resultat guanyador del concurs nacional.',
        category: 'Premis',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 5,
        date: 'dilluns, 20 de maig de 2025',
        dateObj: new Date(2025, 4, 20),
        title: 'Nou conveni de col·laboració amb empreses tecnològiques per a pràctiques',
        excerpt: 'L\'EPS signa acords amb més de 20 empreses del sector tecnològic per oferir oportunitats de pràctiques.',
        category: 'Convenis',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        date: 'dissabte, 18 de maig de 2025',
        dateObj: new Date(2025, 4, 18),
        title: 'Conferència magistral sobre sostenibilitat en l\'enginyeria',
        excerpt: 'El reconegut expert internacional Dr. Martinez oferirà una conferència sobre els reptes mediambientals.',
        category: 'Conferències',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
];

export const newsData = {
    1: {
        id: 1,
        date: 'divendres, 24 de maig de 2025',
        title: 'Nova convocatòria de beques d\'excel·lència acadèmica per al curs 2025-2026',
        excerpt: 'L\'Escola Politècnica Superior obre una nova convocatòria de beques destinades als estudiants amb millor expedient acadèmic.',
        category: 'Beques',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
        <p>L'Escola Politècnica Superior (EPS) ha anunciat l'obertura d'una nova convocatòria de beques d'excel·lència acadèmica per al curs 2025-2026, destinades als estudiants que hagin demostrat un rendiment acadèmic excepcional durant els seus estudis.</p>
        
        <h3>Requisits de la convocatòria</h3>
        <p>Per optar a aquestes beques, els estudiants hauran de complir els següents requisits:</p>
        <ul>
          <li>Tenir una nota mitjana superior a 8,5 en els estudis de grau o màster</li>
          <li>Estar matriculat en algun dels graus o màsters oficials de l'EPS</li>
          <li>No haver superat la durada màxima dels estudis</li>
          <li>Presentar un projecte de recerca innovador</li>
        </ul>
        
        <h3>Import i durada</h3>
        <p>Les beques tenen un import de 3.000€ per curs acadèmic i es poden renovar anualment si es mantenen els requisits acadèmics. Aquest any s'han destinat un total de 150.000€ per finançar fins a 50 beques.</p>
        
        <h3>Termini de sol·licitud</h3>
        <p>El termini per presentar les sol·licituds finalitza el 15 de juny de 2025. Tota la documentació s'ha de presentar telemàticament a través del portal de l'estudiant.</p>
      `,
        author: 'Secretaria Acadèmica EPS',
        location: 'Escola Politècnica Superior'
    },
    2: {
        id: 2,
        date: 'dijous, 23 de maig de 2025',
        title: 'Inauguració del nou laboratori d\'Intel·ligència Artificial i Robòtica',
        excerpt: 'Demà dimecres s\'inaugurarà el nou laboratori equipat amb la tecnologia més avançada per a la recerca en IA.',
        category: 'Infraestructures',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
        <p>L'EPS inaugura demà el seu nou laboratori d'Intel·ligència Artificial i Robòtica, un espai d'última generació que permetrà als estudiants i investigadors treballar amb les tecnologies més avançades del sector.</p>
        
        <h3>Equipament tecnològic</h3>
        <p>El laboratori compta amb:</p>
        <ul>
          <li>20 estacions de treball amb GPU NVIDIA RTX 4090</li>
          <li>Robots col·laboratius per a pràctiques</li>
          <li>Sistemes de visió artificial</li>
          <li>Plataformes de desenvolupament IoT</li>
        </ul>
        
        <h3>Objectius del laboratori</h3>
        <p>Aquest nou espai té com a objectiu principal formar els estudiants en les competències més demandades pel mercat laboral actual, especialment en àrees com el machine learning, la robòtica industrial i els sistemes autònoms.</p>
      `,
        author: 'Departament d\'Enginyeria',
        location: 'Laboratori 3A - Edifici EPS'
    },
    3: {
        id: 3,
        date: 'dimecres, 22 de maig de 2025',
        title: 'Jornada de Portes Obertes: Descobreix els nostres graus d\'enginyeria',
        excerpt: 'El proper 25 de maig celebrem la Jornada de Portes Obertes per mostrar les nostres titulacions als futurs estudiants.',
        category: 'Esdeveniments',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
        <p>L'EPS celebra la seva Jornada de Portes Obertes el proper 25 de maig amb l'objectiu de mostrar als futurs estudiants totes les possibilitats que ofereixen els nostres graus d'enginyeria.</p>
        
        <h3>Programa d'activitats</h3>
        <p>Durant la jornada es duran a terme:</p>
        <ul>
          <li>Presentacions informatives de cada grau</li>
          <li>Visites guiades als laboratoris</li>
          <li>Tallers pràctics per a estudiants de batxillerat</li>
          <li>Sessions de preguntes i respostes amb professors i estudiants actuals</li>
        </ul>
        
        <h3>Inscripció</h3>
        <p>La inscripció és gratuïta però obligatòria. Les places són limitades i es cobriran per ordre d'inscripció.</p>
      `,
        author: 'Gabinet de Comunicació',
        location: 'Campus EPS'
    },
    4: {
        id: 4,
        date: 'dimarts, 21 de maig de 2025',
        title: 'Estudiants de l\'EPS guanyen el primer premi en el concurs d\'innovació tecnològica',
        excerpt: 'Un equip format per estudiants de Grau en Enginyeria Informàtica ha resultat guanyador del concurs nacional.',
        category: 'Premis',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
        <p>Un equip format per estudiants de tercer curs del Grau en Enginyeria Informàtica de l'EPS ha aconseguit el primer premi en el prestigiós Concurs Nacional d'Innovació Tecnològica 2025.</p>
        
        <h3>El projecte guanyador</h3>
        <p>El projecte presentat, titulat "SmartCity Assistant", consisteix en una aplicació mòbil que utilitza intel·ligència artificial per optimitzar les rutes de transport públic en temps real.</p>
        
        <h3>Reconeixement</h3>
        <p>L'equip ha rebut un premi de 10.000€ per continuar desenvolupant el seu projecte, així com la possibilitat de col·laborar amb empreses del sector tecnològic.</p>
      `,
        author: 'Departament d\'Enginyeria Informàtica',
        location: 'Campus EPS'
    },
    5: {
        id: 5,
        date: 'dilluns, 20 de maig de 2025',
        dateObj: new Date(2025, 4, 20),
        title: 'Nou conveni de col·laboració amb empreses tecnològiques per a pràctiques',
        excerpt: 'L\'EPS signa acords amb més de 20 empreses del sector tecnològic per oferir oportunitats de pràctiques.',
        category: 'Convenis',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Campus EPS',
        author: 'Departament de Relacions Externes',
        content: newsItem5Content
      },
      6: {
        id: 6,
        date: 'dissabte, 18 de maig de 2025',
        dateObj: new Date(2025, 4, 18),
        title: 'Conferència magistral sobre sostenibilitat en l\'enginyeria',
        excerpt: 'El reconegut expert internacional Dr. Martinez oferirà una conferència sobre els reptes mediambientals.',
        category: 'Conferències',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Aula Magna - Campus EPS',
        author: 'Departament d\'Enginyeria Ambiental',
        content: newsItem6Content
      }
    };
