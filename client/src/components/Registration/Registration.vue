<template>
    <div class="Registration">
        <md-dialog :md-active.sync="showDialog">
            <form novalidate class="md-layout">
                <md-card class="md-layout-item md-size-100 md-small-size-100">
                    <md-card-header>
                        <div class="md-title">Registration</div>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label for="email">Email</label>
                                    <md-input name="email" id="email" autocomplete="given-name"
                                              v-model="user.email" :disabled="sending"/>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label for="name">Name</label>
                                    <md-input name="name" id="name" autocomplete="family-name"
                                              v-model="user.name" :disabled="sending"/>
                                </md-field>
                            </div>
                        </div>

                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label for="gender">Gender</label>
                                    <md-select name="gender" id="gender" v-model="user.gender" :disabled="sending">
                                        <md-option>Select gender</md-option>
                                        <md-option :value="Gender.Male">M</md-option>
                                        <md-option :value="Gender.Female">F</md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                    </md-card-content>

                    <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                    <md-card-actions>
                        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                        <md-button class="md-primary" @click="showDialog = false" @click.prevent="registerUser">Create user</md-button>
                    </md-card-actions>
                </md-card>

                <md-snackbar >The user  was saved with success!</md-snackbar>
            </form>
        </md-dialog>

        <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>

        {{ user }}
    </div>
</template>

<script lang="ts">
import Registration from "./Registration";

export default Registration
</script>