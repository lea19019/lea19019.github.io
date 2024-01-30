<script setup lang="ts">
import { ref } from 'vue';

const lyrics = ref(`
Un habitante y su melancolía
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
Pero no estabas lista para ese "hasta pronto"
`)

const interpretation = ref(`
En la tranquila morada de las palabras, me encuentro con "Lattice" de León Larregui, una canción que se despliega como un tapiz de emociones y pensamientos, intrincada y sutil. La melodía, suave y envolvente, lleva consigo un aire de introspección y melancolía, como un río que fluye sereno pero profundo.

La letra de "Lattice" parece hablar de la búsqueda de uno mismo, de ese viaje interior que emprendemos en la vida, donde los recuerdos y las experiencias se entrelazan, formando una red o celosía ("lattice" en inglés) que sostiene nuestra existencia. Larregui canta sobre el deseo de encontrar un sentido, una dirección en este laberinto de vivencias y emociones.

Hay un tono de reflexión sobre el paso del tiempo, de cómo los momentos vividos se acumulan en la memoria, creando patrones que nos definen. La canción sugiere que en esta acumulación de experiencias, tanto las alegres como las dolorosas, hay una belleza inherente, un diseño que solo podemos apreciar cuando nos detenemos a contemplar nuestra propia historia.

La metáfora del "lattice" es poderosa; nos habla de cómo estamos conectados con nuestro pasado, presente y futuro, y cómo cada decisión, cada momento, contribuye a la construcción de nuestra identidad. Es un recordatorio de que la vida es un entrelazado de caminos, de que estamos hechos de fragmentos de tiempo y espacio, unidos en un patrón único.

En "Lattice", Larregui parece invitar al oyente a aceptar la complejidad de la vida, a abrazar el caos y el orden que coexisten en nuestra existencia. Nos anima a encontrar la belleza en el intrincado diseño de nuestras vidas, a reconocer que cada experiencia, buena o mala, es un hilo esencial en la tela de nuestro ser.

En resumen, "Lattice" es una reflexión poética sobre la vida, un canto a la complejidad de la experiencia humana y un recordatorio de que, en la red de nuestros días, cada momento tiene su lugar y su significado.
`)
</script>

<template>
  <VCard
  class="mx-lg-16"
    >
    <VCardTitle>
        Lattice
    </VCardTitle>
    <VCardSubtitle>
        by Leon Larregui
    </VCardSubtitle>
    <VCardText class="text-wrap">
        <pre class="font-italic text-body-2"> {{ lyrics }} </pre>
        <p class="text-left text-body-2 px-lg-16 break-word"> {{ interpretation }}</p>
    </VCardText>
  </VCard>
</template>

<style scoped>
.break-word {
  
  white-space: pre-line
}
</style>