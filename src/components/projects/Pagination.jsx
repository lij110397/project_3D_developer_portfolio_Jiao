import PropType from 'prop-types'
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i+1)
    console.log(currentPage)
  return (
    <div className='flex flex-row'>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
                        w-10 h-10 flex items-center justify-center rounded-full
                        ${
                          page !== currentPage
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary'
                        }
                    `}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
Pagination.propTypes = {
  currentPage: PropType.number.isRequired,
  totalPages: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired,
}
