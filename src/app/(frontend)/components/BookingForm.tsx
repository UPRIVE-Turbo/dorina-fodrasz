'use client'

import React, { useActionState } from 'react'
import { CaretDown, Check, PaperPlaneRight, Spinner } from '@phosphor-icons/react'
import { submitBooking, type BookingFormState } from '../actions'

const initialState: BookingFormState = { success: false }

const serviceOptions = [
  { value: 'noi-hajvagas', label: 'Női hajvágás' },
  { value: 'ferfi-hajvagas', label: 'Férfi hajvágás' },
  { value: 'tofestes', label: 'Tőfestés' },
  { value: 'teljes-festes', label: 'Teljes hajfestés' },
  { value: 'balayage', label: 'Balayage / Ombre' },
  { value: 'melir', label: 'Melír' },
  { value: 'styling', label: 'Styling / Alkalmi frizura' },
]

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initialState)

  return (
    <div className="bg-white text-ink p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900 to-rose-400" />

      {state.success ? (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6">
            <Check size={32} />
          </div>
          <h3 className="text-2xl font-serif text-purple-900 mb-2">Köszönöm a megkeresést!</h3>
          <p className="text-ink/60 font-light">
            Hamarosan keresni foglak a megadott telefonszámon, hogy egyeztessük a részleteket.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                Teljes Név <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="pl. Kovács Anna"
                className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                Telefonszám <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+36 30 123 4567"
                className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              E-mail cím
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="pl. anna@example.com"
              className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Kívánt Szolgáltatás
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm appearance-none transition-all duration-300 cursor-pointer"
              >
                <option value="" disabled>
                  Válassz a listából...
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/40">
                <CaretDown size={16} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredTime" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Mikor lenne a legalkalmasabb?
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="text"
              placeholder="pl. Jövő hét kedd vagy csütörtök délután"
              className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
              Megjegyzés / Kérdés
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Ha van elképzelésed, itt leírhatod röviden..."
              className="w-full bg-stone-50 border border-transparent px-4 py-3 text-sm resize-none transition-all duration-300"
            />
          </div>

          {state.error && <p className="text-sm text-rose-500">{state.error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-ink text-white py-4 text-sm font-medium tracking-wide uppercase hover:bg-purple-900 transition-colors duration-300 group flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {pending ? (
              <>
                <Spinner size={18} className="animate-spin" />
                Küldés...
              </>
            ) : (
              <>
                Ajánlat / Időpont kérése
                <PaperPlaneRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
          <p className="text-[0.65rem] text-center text-ink/40 mt-4 leading-tight">
            Az adataidat csak a foglalás visszaigazolásához használjuk fel.
          </p>
        </form>
      )}
    </div>
  )
}
