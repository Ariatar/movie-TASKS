<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Title of Film</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          Enter your telephone number:
          <div class="input-field inline">
            <i class="material-icons prefix">phone</i>
            <input type="text" />
            <label for="email_inline">Telephone</label>
            <div>
              <a href>
                <span class="helper-text ml-12" data-error="wrong" data-success="right">Help</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: value
    };
  }
};
</script>

<style lang="scss" scoped>
span:hover {
  color: red;
  transition: 0.9s;
  font-size: 15px;
}
</style>