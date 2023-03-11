<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreAuth } from '@/stores/storeAuth.js';

const storeAuth = useStoreAuth();

const showMobileNav = ref(false);
const NavbarBurgerRef = ref(null);

onClickOutside(NavbarBurgerRef, () => {
  showMobileNav.value = false;
});
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </div>

        <a
          ref="NavbarBurgerRef"
          role="button"
          :class="['navbar-burger', {'is-active': showMobileNav}]"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        :class="['navbar-menu', {'is-active': showMobileNav}]"
      >
        <div class="navbar-start">
          <button
            v-if="storeAuth.user"
            type="button"
            class="button is-small is-info mt-3 ml-3"
            @click="storeAuth.logoutUser"
          >
            Log out {{ storeAuth.user.email }}
          </button>
        </div>

        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>

          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
