'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Submission } from '@/payload-types'

export type BookingFormState = {
  success: boolean
  error?: string
}

export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const name = formData.get('name')?.toString().trim()
  const phone = formData.get('phone')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const service = formData.get('service')?.toString().trim()
  const preferredTime = formData.get('preferredTime')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !phone) {
    return { success: false, error: 'A név és a telefonszám megadása kötelező.' }
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    await payload.create({
      collection: 'submissions',
      data: {
        name,
        phone,
        email: email || undefined,
        service: (service || undefined) as Submission['service'],
        preferredTime: preferredTime || undefined,
        message: message || undefined,
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Hiba az időpontfoglalás mentésekor:', error)
    return { success: false, error: 'Hiba történt a foglalás elküldésekor. Próbáld újra később.' }
  }
}
