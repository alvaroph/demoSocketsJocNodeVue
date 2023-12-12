<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <input class="form-control" placeholder="Nombre de usuario" v-model="username">
                <button class="btn btn-primary" @click="joinGame">Unirse al juego</button>
                <button class="btn btn-primary" @click="resetPartida">Reset Partida</button>
                <ul>
                    <li v-for="actual in users" v-bind:key="actual">
                    {{ actual }}
                    </li>
                </ul>
            </div>
            <div class="col-md-8">
                <div v-if="userData.tipo=='administrador'" class="alert alert-info">Eres el administrador</div>
                <div v-else class="alert alert-warning">No eres el administrador</div>
                <div v-if="gameState === 'waiting'" class="alert alert-secondary">Esperando participantes</div>
                <div v-if="gameState === 'connected'" class="alert alert-success">Participantes conectados</div>
                <div v-if="gameState === 'countdown'" class="alert alert-primary">Cuenta atrás: <h1>{{ timer }}</h1> segundos</div>
                <div v-if="gameState === 'start'">
                    <button class="btn btn-success" @click="correctAnswer">Respuesta correcta</button>
                    <button class="btn btn-danger" @click="incorrectAnswer">Respuesta incorrecta</button>
                </div>

            </div>
        </div>
       
      
      <div>Puntuación: {{ score }}</div>
      <div class="list-group">
        <div v-for="(player, index) in players" :key="index" class="list-group-item">
          {{ player.name }}: {{ player.score }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {useGameStore} from '../stores/app'
   import {socket} from '../socket'
    export default {
        name: 'JuegoView',
        components: {},
        props: {},
        data() {
            return {
            username: '',
            isAdmin: false,
            gameState: 'waiting',
            score: 0,
            players: [],
            timer: 10
            }
        },
        methods: {
            joinGame() {
               socket.emit('unirPartida', this.username)
            },
            resetPartida() {
                socket.emit('resetPartida')
            },
            correctAnswer() {
            // Implementar la lógica para la respuesta correcta
            },
            incorrectAnswer() {
            // Implementar la lógica para la respuesta incorrecta
            }
        },
        computed: {
            userData() {
                const gameStore = useGameStore()
                return gameStore.getUser()
            },
            users() {
                const gameStore = useGameStore()
                return gameStore.getUsers()
            }
        },
        mounted() {
          socket.on('empezarCuentaAtras', (users) => {
            console.log('empezarCuentaAtras', users)
            this.gameState = 'countdown'
            this.players = users
          })
          
          socket.on('cuentaAtras', (timer) => {
                console.log('cuentaAtras', timer)
                this.timer = timer
            })
            socket.on('empezarPartida', (users) => {
                console.log('empezarPartida', users)
                this.gameState = 'start'
                this.players = users
            })
    }
}
</script>

<style lang="scss" scoped>

</style>