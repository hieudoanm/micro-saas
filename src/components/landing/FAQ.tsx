import { FC } from 'react';

export const FAQ: FC = () => {
	const faqs: { id: string; question: string; answer: string }[] = [
		{
			id: 'question-1',
			question: 'What is Tailwind CSS?',
			answer:
				'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
		},
		{
			id: 'question-2',
			question: 'Do I need JavaScript?',
			answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
		},
		{
			id: 'question-3',
			question: 'What is Tailwind CSS?',
			answer:
				'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
		},
		{
			id: 'question-4',
			question: 'Do I need JavaScript?',
			answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
		},
		{
			id: 'question-5',
			question: 'What is Tailwind CSS?',
			answer:
				'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
		},
		{
			id: 'question-6',
			question: 'Do I need JavaScript?',
			answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
		},
		{
			id: 'question-7',
			question: 'What is Tailwind CSS?',
			answer:
				'Tailwind CSS is a utility-first CSS framework that provides low-level classes for building custom designs quickly.',
		},
		{
			id: 'question-8',
			question: 'Do I need JavaScript?',
			answer: 'No JavaScript is needed when using the native <details> and <summary> tags.',
		},
	];

	return (
		<section className="container mx-auto flex flex-col gap-y-8 px-4 md:gap-y-16 md:px-8">
			<h2 className="text-center text-3xl font-extrabold">Frequently Asked Questions</h2>
			<div className="divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-lg shadow-neutral-100/10">
				{faqs.map(({ id = '', question = '', answer = '' }) => {
					return (
						<details key={id} className="group">
							<summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
								<span className="font-semibold text-neutral-900 dark:text-neutral-100">{question}</span>
								<span className="text-lg text-neutral-600 transition-all duration-300 group-open:rotate-180 dark:text-neutral-400">
									<span className="group-open:hidden">+</span>
									<span className="hidden group-open:inline">-</span>
								</span>
							</summary>
							<div className="px-4 pb-4 text-neutral-600 dark:text-neutral-400">{answer}</div>
						</details>
					);
				})}
			</div>
		</section>
	);
};
