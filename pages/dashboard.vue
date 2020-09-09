<template>
  <div class="container col-md-6 mt-5">
    <h2>Create a new Music</h2>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>Music title:</strong></label>
        <input v-model="form.title" type="text" class="form-control" placeholder="Enter topic title" autofocus>
        <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>Labels:</strong></label>
        <input v-model="form.label" type="text" class="form-control" placeholder="Enter music label" autofocus>
        <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
      </div>
       <div class="form-group">
        <label><strong>Select Genre:</strong></label>
       <select v-model="form.genre" class="form-control">
       <option>Rock</option>
       <option>Jazz</option>
       <option>Hiphop Music</option>
       <option>Folk Music</option>
       <option>Blues</option>
       <option>Musical Theatre</option>
       <option>Heavy metal</option>
       <option>Classical</option>
       <option>Music</option>
       <option>Soul Music</option>
       <option>Punk Music</option>
       <option>Funk</option>
       </select>
        <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>Upload File</strong></label>
        <input  type="file" class="form-control" placeholder="Enter topic title" autofocus>
        <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>Description:</strong></label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    data() {
      return {
        form: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      async create() {
        await this.$axios.$post('/topics', this.form)
        return this.$router.push('/')
      }
    }
  }
</script>













