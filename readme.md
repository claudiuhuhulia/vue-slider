# Vue Slider #

--

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti.

--

- Estrapoliamo la function **createApp** da Vue.
- Inseriamo l'array di oggetti in *data*.
- Richiamiamo il metodo *mount* e colleghiamo la function precedentemente estrapolata all'elemento del DOM.
- Dichiariamo *currentIndex* che sarà l'indice sul quale gireranno le immagini. 
- Inseriamo le immagini dinamicamente utilizzando un **v-for** nel DOM.
- Cancelliamo l'attributo *display:none* dal css per inserirlo dinamicamente usando il metodo **v-show** di Vue e rendiamo la prima immagine attiva collegando l'index number dell'array all currendIndex.
- Rendo dinamica la classe delle thumbanails, inserisco all'interno delle graffe un oggetto che abbia come chiave la classe che verra aggiunta e nel valore la condizione affinchè la classe sia aggiunta(ovvero, la thumbnail attiva sarà quella che avra lo stesso index number del currentIndex).
- Stampiamo in pagina i relativi titoli e le relative descrizioni ritoccando il css e rendendole dinamiche usando la sintassi *mustache*. 
