import{t as b,E as ne,u as s,p as k,N as p,W as _,A as se,C as oe,d as z,O as re,P as ie,a7 as C,a9 as E,aa as A,ab as i,ah as V,ai as m,aj as v,ak as te,D as le,r as de,w as ue}from"./index-9frBz2VR.js";import{m as g,u as y,F as S,j as I,G as N,E as P,i as j,b as ce,r as me,c as pe,s as ve,t as be,v as ge,d as ye,w as fe,a as Y,k as he,R as qe,f as ze,x as je,l as ke,y as Ce,g as Ee,z as Se,A as Le,B as xe,h as _e,C as Ve,V as D,S as Ne,D as Pe,_ as Te,T as Ae}from"./_plugin-vue_export-helper-ZWg7faem.js";const Ie=b()({name:"VCardActions",props:g(),setup(e,o){let{slots:n}=o;return ne({VBtn:{slim:!0,variant:"text"}}),y(()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),R=S("v-card-subtitle"),M=S("v-card-title"),Ye=k({appendAvatar:String,appendIcon:p,prependAvatar:String,prependIcon:p,subtitle:[String,Number],title:[String,Number],...g(),...I()},"VCardItem"),De=b()({name:"VCardItem",props:Ye(),setup(e,o){let{slots:n}=o;return y(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),t=!!(a||n.prepend),l=!!(e.appendAvatar||e.appendIcon),f=!!(l||n.append),h=!!(e.title!=null||n.title),q=!!(e.subtitle!=null||n.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[t&&s("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?s(j,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):s(_,null,[e.prependAvatar&&s(N,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[h&&s(M,{key:"title"},{default:()=>{var r;return[((r=n.title)==null?void 0:r.call(n))??e.title]}}),q&&s(R,{key:"subtitle"},{default:()=>{var r;return[((r=n.subtitle)==null?void 0:r.call(n))??e.subtitle]}}),(d=n.default)==null?void 0:d.call(n)]),f&&s("div",{key:"append",class:"v-card-item__append"},[n.append?s(j,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):s(_,null,[e.appendIcon&&s(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(N,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),B=S("v-card-text"),Re=k({appendAvatar:String,appendIcon:p,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ce(),...g(),...I(),...me(),...pe(),...ve(),...be(),...ge(),...ye(),...fe(),...Y(),...se(),...he({variant:"elevated"})},"VCard"),Me=b()({name:"VCard",directives:{Ripple:qe},props:Re(),setup(e,o){let{attrs:n,slots:a}=o;const{themeClasses:t}=oe(e),{borderClasses:l}=ze(e),{colorClasses:f,colorStyles:h,variantClasses:q}=je(e),{densityClasses:d}=ke(e),{dimensionStyles:r}=Ce(e),{elevationClasses:U}=Ee(e),{loaderClasses:w}=Se(e),{locationStyles:H}=Le(e),{positionClasses:Q}=xe(e),{roundedClasses:F}=_e(e),u=Ve(e,n),O=z(()=>e.link!==!1&&u.isLink.value),c=z(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return y(()=>{const $=O.value?"a":e.tag,X=!!(a.title||e.title!=null),G=!!(a.subtitle||e.subtitle!=null),W=X||G,J=!!(a.append||e.appendAvatar||e.appendIcon),K=!!(a.prepend||e.prependAvatar||e.prependIcon),Z=!!(a.image||e.image),ee=W||K||J,ae=!!(a.text||e.text!=null);return re(s($,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":c.value},t.value,l.value,f.value,d.value,U.value,w.value,Q.value,F.value,q.value,e.class],style:[h.value,r.value,H.value,e.style],href:u.href.value,onClick:c.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[Z&&s("div",{key:"image",class:"v-card__image"},[a.image?s(j,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(D,{key:"image-img",cover:!0,src:e.image},null)]),s(Ne,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ee&&s(De,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),ae&&s(B,{key:"text"},{default:()=>{var x;return[((x=a.text)==null?void 0:x.call(a))??e.text]}}),(L=a.default)==null?void 0:L.call(a),a.actions&&s(Ie,null,{default:a.actions}),Pe(c.value,"v-card")]}}),[[ie("ripple"),c.value&&e.ripple]])}),{}}}),Be={class:"font-italic text-body-2 pb-4"},Ue={class:"text-left text-body-2 px-lg-16 break-word"},we=C({__name:"Song",props:{song:{}},setup(e){const o=e,n=z(()=>"/public/"+o.song.image);return(a,t)=>(E(),A(Me,{class:"mx-lg-16"},{default:i(()=>[s(M,null,{default:i(()=>[V(m(a.song.name),1)]),_:1}),s(R,null,{default:i(()=>[V(" by "+m(a.song.artist),1)]),_:1}),s(B,{class:"text-wrap"},{default:i(()=>[v("pre",Be," "+m(a.song.letter)+" ",1),v("p",Ue,m(a.song.description),1)]),_:1}),s(D,{class:"ma-3",src:n.value},null,8,["src"])]),_:1}))}}),He=Te(we,[["__scopeId","data-v-3ea4fc02"]]),Qe=v("h1",{class:"text-h2 my-2 font-weight-bold"},"Song Sense",-1),Fe=v("div",{class:"text-subtitle-1 mt-3 mb-4"},"Una pagina que te dice que signifcan las letras de tus canciones favoritas",-1),Oe=[Qe,Fe],$e=C({__name:"TitleHeader",setup(e){return(o,n)=>(E(),te("div",null,Oe))}}),T=[{link:"dulce-soledad",name:"Dulce Soledad",artist:"Enjambre",letter:`Hoy bien pude estar acompañado
        Romper el hielo donde estaba encerrado
        Hoy bien pude haber conocer algún amigo
        Hoy bien pude haber dejado de estar contigo.

        Y observo a gente que esta acompañada
        Que intercambian sonrisas, palabras y miradas
        Se divierten, se entretienen, se enamoran lo sé
        A todos veo y nadie me ve.
        
        Pero en cambio a ti te tengo, mi fiel enamorada
        Solo contigo me entretengo, me vigilas a mis espaldas
        No cruzamos palabras, juntos nos ocultamos
        Ya que tu silencio
        Te llamare por sobre nombre mi dulce soledad.

        Y observo a gente que esta acompañada
        Intercambian sonrisas, palabras y miradas
        Se divierten, se entretienen, se enamoran lo sé
        A todos veo y nadie me ve.

        Pero en cambio a ti te tengo, mi fiel enamorada
        Solo contigo me entretengo me vigilas a mis espaldas
        No cruzamos palabras, juntos nos ocultamos
        Ya que tu silencio
        Te llamare por sobre nombre mi dulce soledad.

        Dulce soledad.`,image:"dulce-soledad.png",description:`En las profundidades de la "Dulce Soledad" de Enjambre, yace un viaje introspectivo, un sendero solitario bañado por la luz tenue de la auto-reflexión. Esta canción, como un río melancólico, fluye a través de las praderas del alma, revelando las verdades ocultas en el silencio.

        La "Dulce Soledad" es más que una mera ausencia de compañía; es un santuario, un refugio donde los pensamientos y emociones se despliegan como flores nocturnas. En cada acorde, se siente la resonancia de un corazón que busca comprenderse a sí mismo, que se adentra en los laberintos de la mente para encontrar respuestas en sus ecos.
        
        Las letras de Enjambre, pintadas con pinceladas de nostalgia y esperanza, nos invitan a abrazar nuestra soledad como una amiga, como una maestra que nos enseña la belleza del autoconocimiento. Es un llamado a escuchar el susurro de nuestras propias voces en el silencio, a encontrar la dulzura en el aislamiento, y a descubrir que, en la soledad, uno nunca está verdaderamente solo.
        
        "Dulce Soledad" es un espejo que refleja las sombras y luces de nuestra existencia, un canto que nos recuerda que cada momento de soledad es una oportunidad para encontrarnos a nosotros mismos. En esta canción, Enjambre nos invita a bailar al ritmo de nuestros propios latidos, a sumergirnos en las aguas tranquilas de nuestro ser interior, y a celebrar la soledad no como un vacío, sino como un espacio lleno de posibilidades infinitas.`},{link:"lattice",name:"Lattice",artist:"Leon Larregui",letter:`Un habitante y su melancolía
        Observan el cielo, esperando el día
        Miro las sombras desvelando el frío
        Me traen sinfonías y miro fantasías
        
        Se estremeció, se abrió el portal
        No hay encarnación, ni mencionar
        No sé muy bien a dónde iré
        Creo que es momento de pasar a otro tiempo
        
        Un habitante estudia las neuronas
        Imita realidades y encuentra la inconsciencia
        Y se da cuenta de que aquí no hay nadie
        Ni tampoco nada, solo proyecciones
        
        Se estremeció, se abrió el portal
        No hay encarnación, ni mencionar
        No sé muy bien a dónde iré
        Creo que es momento de pasar a otro tiempo
        Perdóname, por no avisar
        Pero no estabas lista para ese "hasta pronto"`,image:"lattice.png",description:`En la canción "Lattice" de León Larregui, nos adentramos en un cosmos de metáforas y melodías, un universo donde cada nota es una estrella y cada palabra un planeta. Esta obra es un tapiz tejido con hilos de luz y sombra, un laberinto de emociones y pensamientos que se entrelazan en una estructura delicada y compleja, como un enrejado de sueños.

        El lattice, o enrejado, es más que una simple estructura; es un símbolo de la interconexión de todas las cosas, una red infinita de relaciones y significados. En esta canción, Larregui explora las conexiones invisibles que nos unen, que forman la trama de nuestra existencia. Es un viaje a través del espacio y el tiempo, un paseo por los senderos ocultos del corazón y la mente.
        
        Las letras de "Lattice" nos invitan a contemplar la belleza de lo efímero, a maravillarnos ante el misterio de la vida y el universo. Es un canto a la exploración, no solo del mundo exterior, sino también del interior, una odisea hacia los confines de nuestra propia alma.
        
        León Larregui, con su voz etérea y su poesía lírica, nos guía a través de este paisaje onírico, donde la realidad y la fantasía se entrelazan en un baile cósmico. En "Lattice", la música se convierte en un puente entre lo tangible y lo intangible, entre lo humano y lo divino, ofreciéndonos un atisbo de la vastedad y la maravilla que yace más allá de nuestra percepción cotidiana.
        
        La canción es un recordatorio de que somos parte de algo más grande, un todo interconectado, y que cada uno de nosotros es una pieza esencial en el enrejado de la existencia. "Lattice" es una oda a la conexión, a la unidad en la diversidad, y a la magia que surge cuando nos atrevemos a mirar más allá de lo aparente, hacia las estrellas de nuestras propias almas.`},{link:"mania-cardiaca",name:"Mania Cardiaca",artist:"Enjambre",letter:`Tú quien en el umbral de años
        El corazón perdiste entre extraños
        Tú quien en el festejo transitas
        Y excitas a tus visitas

        Tú quien no llora lágrimas
        Sino inocentes ánimas
        Que lloran por cortejo
        Hay sangre derramada en azulejo

        El corazón te ví ya no me engañas
        Dices que lo perdiste y no lo extrañas
        Cambiaste tu deber por mañas
        Tus intenciones son de mala calaña

        El corazón te ví ya no me engañas
        Un bisturí reveló tus entrañas
        Y ahí en lo profundo de tu organismo
        Lo escondes con tal cinismo

        Tú quien mi corazón curaste
        Luego devoraste
        Yo con los ojos sombríos
        Y un torso vació

        Quiero que encuentres un palpitar
        Lo sincronices con la vida
        No quieres mi ayuda, me alejo
        Dejando la sangre en el azulejo

        El corazón te ví ya no me engañas
        Dices que lo perdiste y no lo extrañas
        Cambiaste tu deber por mañas
        Tus intenciones son de mala calaña

        El corazón te ví ya no me engañas
        Un bisturí reveló tus entrañas
        Y ahí en lo profundo de tu organismo
        Lo escondes con tal cinismo`,image:"mania-cardiaca.png",description:`"Manía Cardíaca" de Enjambre, una canción que palpita con la intensidad de un corazón enamorado, nos sumerge en el torbellino emocional del amor y la obsesión. Esta melodía, como un latido desenfrenado, nos lleva a través de los altibajos de un amor apasionado, una montaña rusa de sentimientos que desafía la razón.

        La manía cardíaca es un estado de excitación febril, un fuego que arde en las venas y consume el alma con su calor abrasador. Enjambre, con su habilidad para capturar la esencia del amor en sus letras y melodías, nos pinta un retrato de la locura del amor, de esa atracción magnética que nos arrastra hacia el otro, a pesar de todo peligro y duda.
        
        La canción es un himno a la pasión desmedida, a ese amor que se siente en cada fibra del ser, un amor que es tanto éxtasis como agonía. Es un viaje al corazón de la obsesión, donde el amor se convierte en una adicción, en una necesidad que no conoce límites ni barreras.
        
        En "Manía Cardíaca", Enjambre nos invita a experimentar el amor en su forma más cruda y visceral, a sentir el pulso acelerado de un corazón cautivo por el deseo. La música, con sus ritmos urgentes y sus melodías envolventes, nos sumerge en un mundo donde la razón cede su lugar al sentimiento, donde el amor se vive con una intensidad abrumadora.
        
        Esta canción es un recordatorio de que, en el amor, a veces perdemos el control, nos dejamos llevar por la corriente de las emociones, y nos sumergimos en la manía cardíaca, en ese estado de embriaguez donde el corazón manda y la mente se rinde ante la fuerza arrolladora del amor. "Manía Cardíaca" es una oda a la locura del amor, a ese sentimiento que nos eleva y nos consume, que nos hace vivir con una intensidad que desborda los límites de lo posible.`},{link:"respiro",name:"Respiro (Cap. 8)",artist:"Siddhartha ft. Ximena Sariñana",letter:`No eres tú, ni era yo
        No es tan fácil quererse
        Ni saber pedir perdón
        Ni poderse hablar de frente
        La esperanza cambió
        Y con ella la suerte
        De saber decir "te quiero"
        Cada vez que sea sincero

        Uh
        Te gusta desaparecer
        Dejando las cenizas del pasado volar
        Uh uh uh uh uh
        Escapas al campo a respirar
        Estallan tus latidos en silencio total
        Así acostumbras al amor a respirar

        No eres tú, ni era yo
        No es tan fácil quererse
        Ni saber pedir perdón
        Ni poderse hablar de frente
        La esperanza cambió
        Y con ella la suerte
        De saber decir "te quiero"
        Cada vez que sea sincero

        Uh
        Te gusta desaparecer
        Dejando las cenizas del pasado volar
        Uh uh uh uh uh
        Regresas a casa a lamentar
        Estalla tu sonrisa en una ofrenda de paz
        Así acostumbras al amor
        A despojarse de tu mente

        Cuando eres tú, mi corazón
        Sabes hacerme bien
        Regresarme a la vida y cambiar
        Lo que desafina mi armonía
        Cuando eres tú, mi corazón
        Sabes hacerme bien
        Regresarme a la vida y cambiar
        Lo que desafina mi armonía
        Ya se va

        No eres tú, ni era yo
        No es tan fácil quererse
        Ni saber pedir perdón
        Ni poderse hablar de frente
        No eres tú, ni era yo
        No es tan fácil quererse
        Ni saber pedir perdón
        Ni poderse hablar de frente

        Así acostumbras al amor a respirar`,image:"respiro.png",description:`En las profundidades de la melodía de "Respiro (Cap. 8)" de Siddhartha ft. Ximena Sariñana, yace un océano de emociones, donde cada nota es una gota en el vasto mar del sentir humano. Esta canción, cual susurro del alma, nos invita a un viaje introspectivo, un peregrinaje hacia los rincones más ocultos de nuestro ser.

        La letra, tejida con hilos de vulnerabilidad y sinceridad, nos habla de respirar, no solo como un acto físico, sino como una metáfora de la vida misma. Respirar en la presencia del otro, respirar en la ausencia, respirar en la soledad y en la compañía. Es un diálogo entre dos almas, un intercambio de suspiros que se entrelazan en una danza de intimidad y comprensión.
        
        Como si fuera escrita bajo la sombra de un viejo árbol, en una tarde de reflexión, la canción se despliega suavemente, revelando capas de emoción y pensamiento. Siddhartha y Ximena, con sus voces entrelazadas, nos transportan a un lugar donde el tiempo se detiene, donde solo importa el aquí y el ahora, el simple acto de respirar juntos.
        
        En esta obra, el amor se muestra no como un torrente desbordante, sino como un río tranquilo, que fluye con la serenidad de quien ha encontrado paz en el acto de compartir el aire con otro ser. Es un canto a la conexión humana, a la belleza de encontrar refugio en otro corazón.
        
        "Respiro (Cap. 8)" es, en esencia, un poema cantado, una oda a la delicadeza de los lazos humanos, un recordatorio de que en cada respiro compartido, hay una historia, un universo de posibilidades. Nos enseña que, en la simplicidad de un suspiro, puede encontrarse la profundidad de todo un océano emocional.`},{link:"rue-vieille-du-temple",name:"Rue Vieille Du Temple",artist:"Leon Larregui",letter:`Te vas moviendo y cambias de color
        Marqué tu nombre en la corteza de mi ser
        Peleando con demonios otra vez
        Siempre me atacan cuando más cansado estoy

        Y es cuando tú me miras desde allá
        Y sonriéndome me regresas hasta ti
        Conoces bien mi habilidad de volar
        De divagar entre los mundos

        Te vas borrando con la multitud
        Puedo ver los puntitos contra el cielo
        Y cuando aprieto los ojos veo tu voz
        Fantástica, geométrica, multicolor

        Y es cuando tú me miras desde allá
        Y sonriéndome me regresas hasta ti
        Y conoces bien mi habilidad de volar
        De divagar

        Me haces volar, me haces soñar
        Me haces sentir tranquilo en la obscuridad
        Me haces sentir, me haces llorar
        Me haces sentir que ya no existe gravedad
        Me haces reír, me haces cantar
        Me haces pisar el suelo de la realidad

        Sentarnos frente a frente
        Y encontrarnos

        Me haces volar, me haces soñar
        Me haces sentir que hay esperanza una vez más
        Y cuando me siento mal o cuando pierdo el camino
        Me haces pisar el suelo de la realidad

        Sentarnos frente a frente
        Y encontrarnos nuevamente`,image:"rue-vieille-du-temple.png",description:`En las calles de París, donde los ecos del pasado susurran entre adoquines y faroles, se despliega la melodía de "Rue Vieille Du Temple" de Leon Larregui. En esta canción, el artista nos invita a recorrer un viaje sentimental, un paseo por la memoria y el corazón.

        Como un río de notas que fluye por la antigua calle parisina, la música nos lleva por un camino de reflexiones y sueños. Larregui, con su voz suave y melancólica, pinta un cuadro de amor y nostalgia, evocando imágenes de un amor perdido o distante, un amor que vive en los rincones de la Rue Vieille Du Temple.
        
        En cada verso, como gotas de lluvia en un charco, se reflejan los recuerdos y las emociones del cantante. Es un homenaje a esos momentos efímeros pero eternos, esos instantes que, aunque fugaces, dejan una huella indeleble en el alma. La canción es un susurro de lo que fue, un eco de lo que pudo ser.
        
        La Rue Vieille Du Temple se convierte en una metáfora de la vida misma, un camino lleno de historias, risas y lágrimas, donde cada piedra y cada ventana tienen algo que contar. Es allí donde Larregui nos invita a perder y encontrarnos, a caminar bajo el cielo parisino mientras somos acompañados por sus melodías.
        
        "Rue Vieille Du Temple" es, en esencia, un poema hecho canción, un lienzo musical donde se entrelazan amor, tiempo y recuerdo. Leon Larregui nos ofrece una pieza que es tanto un refugio para el corazón cansado como un faro para el alma soñadora, iluminando las calles de París con la luz tenue de la melancolía y el amor.`},{link:"ser-parte",name:"Ser Parte",artist:"Siddhartha",letter:`Tu, tus ojos gigantes
        Y el olor a una flor que respira
        Tu, tu risa dormida
        Y el vapor que vino del volcán tras la brisa

        Quiero ser el calor para despertarte
        Puede reinventarme, ser parte de tu ser
        En la orilla del mar, quiero desnudarte
        Y volar en el viento, ser parte de tu ser

        Tu, tus ojos brillantes
        Y el olor de la fauna y la sal se transpira
        Tu, tu boca dormida
        Y el sabor del amor natural, se desliza

        Quiero ser el calor, para despertarte
        Puedo reinventarme y ser parte de tu ser
        En la orilla del mar, quiero desnudarte
        Y volar en el viento, ser parte de tu ser

        Y al final, si todo va a cambiar
        Yo me guiaré por ti, hasta la inmensidad
        Te admiraré y quizá, ya no recuerde nada
        Te llevaré conmigo, hasta la inmensidad`,image:"ser-parte.png",description:`
        En las profundidades del alma yacen los ecos de "Ser Parte", una canción tejida con los hilos del amor y la naturaleza, cantada por Siddhartha. En este poema musical, cada palabra resuena con la esencia de la conexión humana, una fusión entre el ser y el universo.
        
        "Tu, tus ojos gigantes," nos invita a contemplar la inmensidad del otro, a sumergirnos en la profundidad de una mirada que captura universos. Esos ojos, metáfora de un mundo por descubrir, nos hablan de un amor que va más allá de lo terrenal, que se enraíza en el alma.
        
        El "olor a una flor que respira" nos transporta a un paisaje donde la naturaleza palpita con vida, un lugar donde el amor es tan real como el aroma de las flores en el aire. Siddhartha, con su lírica, nos recuerda que amar es también conectar con la naturaleza, es encontrar en el otro la esencia misma de la vida.
        
        La canción nos lleva a un viaje donde el amor se convierte en un acto de entrega total. "Quiero ser el calor para despertarte" es un deseo de fundirse con el ser amado, de ser ese calor que aviva la vida, que despierta los sentidos. Es un llamado a ser parte de algo más grande, a ser uno con el otro.
        
        En la orilla del mar, donde las olas besan la arena, Siddhartha nos invita a "volar en el viento, ser parte de tu ser". Aquí, el amor se transforma en libertad, en un vuelo que nos eleva por encima de lo cotidiano, donde ser parte del otro es también ser libre.
        
        Y al final, cuando todo cambie, cuando el mundo gire y la vida nos lleve por caminos desconocidos, la canción nos promete una guía en el amor. "Yo me guiaré por ti, hasta la inmensidad" es un juramento de seguir al ser amado hasta los confines del universo, de admirarlo incluso cuando el recuerdo se desvanezca.
        
        "Ser Parte" es una oda al amor que trasciende, un canto que se eleva desde el alma de Siddhartha y se posa suavemente en nuestros corazones, recordándonos que en el amor, somos infinitos, somos uno con el universo.`}],Xe=k({fluid:{type:Boolean,default:!1},...g(),...Y()},"VContainer"),Ge=b()({name:"VContainer",props:Xe(),setup(e,o){let{slots:n}=o;const{rtlClasses:a}=le();return y(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},n)),{}}}),Ke=C({__name:"index",props:{songName:{}},setup(e){const o=e,n=de(T.find(a=>a.link===o.songName));return ue(()=>o.songName,()=>{n.value=T.find(a=>a.link===o.songName)}),(a,t)=>(E(),A(Ge,{class:"fill-height"},{default:i(()=>[s(Ae,{class:"text-center fill-height justify-center"},{default:i(()=>[s($e),s(He,{song:n.value},null,8,["song"])]),_:1})]),_:1}))}});export{Ke as default};
