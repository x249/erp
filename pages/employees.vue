<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
      <v-card class="slight-br mt-10 pb-5" outlined flat>
        <v-sheet
          class="v-sheet--offset mx-auto px-4 py-8 slight-br"
          color="secondary"
          min-height="100px"
          max-width="calc(100% - 64px)"
          elevation="6"
          dark
        >
          <span class="display-2 font-weight-thin">Employees</span>
        </v-sheet>
        <v-data-table
          :headers="headers"
          :items="employees"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          multi-sort
          @page-count="pageCount = $event"
        >
          <template v-slot:item.action="{ item }">
            <v-btn text icon color="green">
              <v-icon
                small
              >
                {{ mdiPencil }}
              </v-icon>
            </v-btn>
            <v-btn text icon color="red">
              <v-icon
                small
              >
                {{ mdiDeleteForever }}
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :next-icon="mdiChevronRight"
            color="secondary"
            circle
            :prev-icon="mdiChevronLeft"
            :length="pageCount"
          />
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiChevronRight, mdiChevronLeft, mdiPencil, mdiDeleteForever } from '@mdi/js'
export default {
  head: () => ({
    title: 'Employees'
  }),
  data: () => ({
    mdiChevronRight,
    mdiChevronLeft,
    mdiPencil,
    mdiDeleteForever,
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      { text: 'Salary', value: 'salary' },
      { text: 'Department', value: 'department' },
      { text: 'Gender', value: 'gender' },
      { text: 'Actions', value: 'action', sortable: false, align: 'center' }
    ],
    employees: [
      {
        name: 'Osama',
        salary: 500000,
        department: 'Development',
        gender: 'Male'
      },
      {
        name: 'Baraa',
        salary: 2000,
        department: 'Sanitary',
        gender: 'Male'
      },
      {
        name: 'Aflatoon',
        salary: 2000,
        department: 'Sanitary',
        gender: 'Male'
      },
      {
        name: 'Hisham',
        salary: 2500,
        department: 'Accounting',
        gender: 'Male'
      },
      {
        name: 'Yaseen',
        salary: 2500,
        department: 'Human Resources',
        gender: 'Male'
      }, {
        name: 'Mubarak',
        salary: 2300,
        department: 'Development',
        gender: 'Male'
      },
      {
        name: 'Ibtisam',
        salary: 20000,
        department: 'Sanitary',
        gender: 'Female'
      },
      {
        name: 'Hind',
        salary: 200,
        department: 'Sanitary',
        gender: 'Female'
      },
      {
        name: 'Gornass',
        salary: 2500,
        department: 'Accounting',
        gender: 'Male'
      },
      {
        name: 'Yasmeen',
        salary: 2500,
        department: 'Human Resources',
        gender: 'Female'
      }
    ]
  })
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
