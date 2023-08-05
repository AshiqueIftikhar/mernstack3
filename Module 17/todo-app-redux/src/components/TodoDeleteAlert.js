import Swal from "sweetalert2"
import store from "../redux/store/store"
import { removeTodo } from "../redux/state/todoSlice"

export function TodoDeleteAlert(i,value){
    Swal.fire({
        title: 'Are you sure, you want to delete '+ value+'?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch(removeTodo(i))
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}