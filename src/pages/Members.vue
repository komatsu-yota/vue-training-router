<template>
  <div>
    <h2>members</h2>
    <ul>
      <template v-for="profile in profiles">
        <li :key="profile.id">
          <router-link :to="`/member/${profile.id}`">#{{profile.id}} {{profile.name}}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import profiles from "./memberProfiles";
export default {
  computed: {
    profiles() {
      return profiles;
    }
  }
};
</script>

