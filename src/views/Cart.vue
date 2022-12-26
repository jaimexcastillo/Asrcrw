<template>
    <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-8">
                        <list-item-component />
                    </div>
                    <div class="col-4 col-lg-4">
                        <total-buy-component />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-4 col-lg-4">
                      <div class="cho-container"></div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}

  const mp = new MercadoPago(process.env.VUE_APP_MP_PK, {
    locale: 'es-MX'
  });

  mp.checkout({
    preference: {
      id: '12344'
    },
    render: {
      container: '.cho-container',
      label: 'Proceder al pago',
    }
  });
</script>
