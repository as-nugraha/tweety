<template>
    <!-- posted -->
    <div class="col-md-12">
        <div class="card mb-2">
            <div class="card-body">
                {{user}}
                <div class="d-flex">
                    <div class="me-3">
                    <img :src="item.picture" alt="photo" class="rounded-circle">
                    </div>
                    <div>
                    <span class="me-1"><b>{{item.name}}</b></span>
                    <span class="me-1">@{{item.username}}</span>
                    <span class="me-1 text-muted">{{parseDate(item.date)}}</span>
                    <div>{{item.tweet}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {    
    props: {
        item: {
            type: Object,
            default: null
        },
    },
    methods: {    
        parseDate(param) {
            return moment(param).fromNow();
        },
    },
}
</script>