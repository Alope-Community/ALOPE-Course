import { useState } from 'react'
import Modal from './Modal'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandWhatsapp, IconCheck, IconClipboard, IconSend3 } from 'justd-icons'
import TextInput from './TextInput'

const ShareButton = () => {

    const [showModal, setShowModal] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)

        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div>
            <button onClick={() => setShowModal(true)} className="flex gap-2 items-center rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 md:px-10">
                <IconSend3 />
                Bagikan
            </button>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="w-full max-w-md mx-auto space-y-6 my-10">

                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">
                            Bagikan Event
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Bagikan event ini ke teman atau media sosial kamu:
                        </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-3">

                        <button className="flex items-center justify-center gap-2 border border-green-500 rounded-xl py-3 font-medium text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200">
                            <IconBrandWhatsapp />
                            WhatsApp
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-pink-500 rounded-xl py-3 font-medium text-pink-600 hover:text-white hover:border-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300">
                            <IconBrandInstagram />
                            Instagram
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-blue-600 rounded-xl py-3 font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                            <IconBrandFacebook />
                            Facebook
                        </button>

                        <button className="flex items-center justify-center gap-2 border border-[#0A66C2] rounded-xl py-3 font-medium text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-200">
                            <IconBrandLinkedin />
                            LinkedIn
                        </button>

                    </div>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-3 text-gray-400">
                                atau salin link
                            </span>
                        </div>
                    </div>

                    {/* Copy Link */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                        <TextInput
                            readOnly
                            value={window.location.href}
                            className="border-none shadow-none block w-full"
                        />
                        <button
                            onClick={handleCopy}
                            className="px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition border-s"
                        >
                            {copied ? <IconCheck className="text-green-500" /> : <IconClipboard />}
                        </button>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default ShareButton