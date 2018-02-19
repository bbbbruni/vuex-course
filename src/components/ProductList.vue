<template>
    <div>
        <h1>Product list</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title }} - {{ product.price }} - <small><i>{{ product.inventory }} available</i></small>
            </li>
        </ul>
    </div>
</template>

<script>
import shop from '@/api/shop'
import store from '@/store/index'

export default {
    computed: {
        products () {
            return store.state.products
        }
    },
    created () {
        shop.getProducts(products => {
            store.commit('setProducts', products)
        })
    }
}
</script>