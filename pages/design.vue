<template>
  <div>
    <hero />
    <card1 />
    <card2 />
    <card3 />
    <card4 />
    <card5 />
    <carousel />
    <card6 />
  </div>
</template>

<script>
import hero from '~/components/hero.vue'
import card1 from '~/components/landing_cards/card_1.vue'
import card2 from '~/components/landing_cards/card_2.vue'
import card3 from '~/components/landing_cards/card_3.vue'
import card4 from '~/components/landing_cards/card_4.vue'
import card5 from '~/components/landing_cards/card_5.vue'
import carousel from '~/components/landing_cards/carousel.vue'
import card6 from '~/components/landing_cards/card_6.vue'

export default {
  components: {
    hero,
    card1,
    card2,
    card3,
    card4,
    card5,
    carousel,
    card6
  },
}
</script>
