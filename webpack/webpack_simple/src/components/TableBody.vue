<template>
    <tbody>
        <tr v-for="itmes in tBody">
            <td v-for="itme in itmes">{{itme}}</td>
        </tr>
    </tbody>
</template>
<script>
    export default{
        data(){
            return {
                tBody:[
                    [
                        11.03,
                        1.51,
                        2.2,
                        21.5,
                        85,
                        2.46,
                        2.17,
                        0.52,
                        2.01,
                        1.9,
                        1.71,
                        2.87,
                        407,
                        "Rework"
                    ],
                    [
                        11.41,
                        0.74,
                        2.5,
                        21,
                        88,
                        2.48,
                        2.01,
                        0.42,
                        1.44,
                        3.08,
                        1.1,
                        2.31,
                        434,
                        "Rework"
                    ],
                    [
                        11.45,
                        2.4,
                        2.42,
                        20,
                        96,
                        2.9,
                        2.79,
                        0.32,
                        1.83,
                        3.25,
                        0.8,
                        3.39,
                        625,
                        "Rework"
                    ],
                    [
                        11.46,
                        3.74,
                        1.82,
                        19.5,
                        107,
                        3.18,
                        2.58,
                        0.24,
                        3.58,
                        2.9,
                        0.75,
                        2.81,
                        562,
                        "Rework"
                    ],
                    [
                        11.56,
                        2.05,
                        3.23,
                        28.5,
                        119,
                        3.18,
                        5.08,
                        0.47,
                        1.87,
                        6,
                        0.93,
                        3.69,
                        465,
                        "Rework"
                    ]
                ]
            }
        }
    }
</script>
<style>

</style>