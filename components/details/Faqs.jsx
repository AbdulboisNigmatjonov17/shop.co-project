export default function Faqs({ data }) {
  return (
    <div className='w-full text-left flex flex-col gap-5'>
      <div>
        <h3 className='text-2xl font-semibold'>{data.Faqs.first.question}</h3>
        <p className='text-xl'>{data.Faqs.first.answer}</p>
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>{data.Faqs.second.question}</h3>
        <p className='text-xl'>{data.Faqs.second.answer}</p>
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>{data.Faqs.third.question}</h3>
        <p className='text-xl'>{data.Faqs.third.answer}</p>
      </div>
    </div>
  )
}
