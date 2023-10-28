import { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import Image from 'next/image'
import { SlUser } from 'react-icons/sl'

import { cn } from '@/Utilities/Utilities'
import { ExtendedMessage } from '../../../types/message'
import { Icons } from '../Icons'

interface MessageProps {
  message: ExtendedMessage
  isNextMessageSamePerson: boolean
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ message, isNextMessageSamePerson }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-end', {
          'justify-end': message.isUserMessage,
        })}
      >
        <div
          className={cn(
            'relative rounded-lg flex h-8 w-8 aspect-square items-center justify-center',
            {
              'order-2 bg-zinc-500 rounded-sm': message.isUserMessage,
              'order-1 bg-zinc-200 rounded-sm': !message.isUserMessage,
              invisible: isNextMessageSamePerson,
            },
          )}
        >
          {message.isUserMessage ? (
            <SlUser className="fill-zinc-200 text-zinc-200 h-3/4 w-3/4" />
          ) : (
            <Image
              width={20}
              height={20}
              src="/logo.png"
              alt="logo..."
              className="w-full h-full"
            />
          )}
        </div>

        <div
          className={cn('flex flex-col space-y-2 text-base max-w-md mx-2', {
            'order-1 items-end': message.isUserMessage,
            'order-2 items-start': !message.isUserMessage,
          })}
        >
          <div
            className={cn('px-4 py-2 rounded-lg inline-block', {
              'bg-zinc-500 text-white': message.isUserMessage,
              'bg-gray-200 text-gray-900': !message.isUserMessage,
              'rounded-br-none':
                !isNextMessageSamePerson && message.isUserMessage,
              'rounded-bl-none':
                !isNextMessageSamePerson && !message.isUserMessage,
            })}
          >
            {typeof message.text === 'string' ? (
              <ReactMarkdown
                className={cn('prose', {
                  'text-zinc-50': message.isUserMessage,
                })}
              >
                {message.text}
              </ReactMarkdown>
            ) : (
              message.text
            )}
            {message.id !== 'loading-message' ? (
              <div
                className={cn('text-xs select-none mt-2 w-full text-right', {
                  'text-zinc-200': !message.isUserMessage,
                  'text-zinc-500': message.isUserMessage,
                })}
              >
                {format(new Date(message.createdAt), 'HH:mm')}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  },
)

export default Message
