import Swal from 'sweetalert2'

export default function Loading() {
  return (
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'OK'
      })
  )
}
