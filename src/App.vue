<template>
    <div class="box">
        <ul class="puzzle-wrap">
            <li 
                :class="{'puzzle': true, 'puzzle-empty': !puzzle}" 
                v-for="puzzle in puzzles" 
                v-text="puzzle"
                @click="moveFn($index)"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            puzzles: []
        }
    },
    methods: {
        moveFn (index) {

        }
    },
    ready () {
        let puzzleArr = [],
            i = 1;

        // 生成包含1 ~ 15数字的数组
        for (i; i < 16; i++) {
            puzzleArr.push(i);
        }

        // 随机打乱数组
        puzzleArr = puzzleArr.sort(() => {
            return Math.random() - 0.5
        });

        // 页面显示
        this.puzzles = puzzleArr;
        this.puzzles.push('');
    }
}
</script>

<style>
@import url('./assets/css/bootstrap.min.css');

.box {
    padding: 100px;
}

.puzzle-wrap {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    padding: 0;
    background: #ccc;
    list-style: none;
}

.puzzle {
    float: left;
    width: 100px;
    height: 100px;
    font-size: 20px;
    background: #f90;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 4px;
    text-shadow: 1px 1px 1px #B9B4B4;
    cursor: pointer;
}

.puzzle-empty {
    background: #ccc;
    box-shadow: inset 2px 2px 18px;
}
</style>